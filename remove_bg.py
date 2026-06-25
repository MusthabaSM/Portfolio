import sys
from rembg import remove
from PIL import Image

try:
    input_path = 'public/Profile7.png'
    output_path = 'public/Profile7_nobg.png'
    
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print("Successfully removed background from Profile7!")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
