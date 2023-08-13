import argparse
from PIL import Image
from pathlib import Path

# Constants
allowed_extensions = ['.jpg', '.jpeg']
img_size = 1280, 720


def list_input_images(input_directory: Path) -> list:
    input_files = []
    for file in input_directory.iterdir():
        if file.suffix.lower() in allowed_extensions:
            input_files.append(file.resolve())
    return input_files


parser = argparse.ArgumentParser(
    "Image scaler",
    "Scales images from the given directory and puts them in the output directory"
)

parser.add_argument("--input", "-i", required=True)
parser.add_argument("--output", "-o", required=True)

args = parser.parse_args()

input_dir = Path(args.input)
output_dir = Path(args.output)
if (not input_dir.is_dir()):
    raise ValueError("Input must be a directory")
if (output_dir.is_file()):
    raise ValueError(
        "There can not be a file with the name of the output directory")
if (input_dir == output_dir):
    raise ValueError("Input and output directory can not be the same")

output_dir.mkdir(parents=True, exist_ok=True)

for img in list_input_images(Path(args.input)):
    outfile = (Path(output_dir, (img.stem + img.suffix.lower())))
    pil_img = Image.open(img)
    pil_img.thumbnail(img_size)
    pil_img.save(outfile, "JPEG")
