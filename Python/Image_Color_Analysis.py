# 🔎 # Code To Extract The Most Common Colors In The Image

from PIL import Image
from collections import Counter

image_png = r"F:\Image_Color_Analysis\Design\Image\Color\Image_Png.png"
image_jpg = r"F:\Image_Color_Analysis\Design\Image\Color\Image_Jpg.jpg"
image_gif = r"F:\Image_Color_Analysis\Design\Image\Color\Image_Gif.gif"


def extract_colors(image_path, num_colors=5):
    image = Image.open(image_path).convert("RGB")
    pixels = list(image.getdata())
    most_common_colors = Counter(pixels).most_common(num_colors)
    for color, count in most_common_colors:
        print(f"Color: {color}, Repetition: {count}")


extract_colors(image_png, 5)
print("_" * 50)
extract_colors(image_jpg, 3)
print("_" * 50)
extract_colors(image_gif, 10)
