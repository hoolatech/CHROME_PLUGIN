from PIL import Image, ImageDraw
import os
import random

def generate_icon(size):
    image = Image.new("RGB", (size, size), (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
    draw = ImageDraw.Draw(image)
    draw.text((size // 4, size // 4), str(size), fill="white")
    return image

def save_icon(size, path):
    icon = generate_icon(size)
    icon.save(path, "PNG")

def main():
    icon_sizes = [16, 48, 128]
    icon_dir = "images"

    if not os.path.exists(icon_dir):
        os.makedirs(icon_dir)

    for size in icon_sizes:
        icon_path = os.path.join(icon_dir, f"icon{size}.png")
        save_icon(size, icon_path)

    print("Random icons generated successfully.")

if __name__ == "__main__":
    main()
