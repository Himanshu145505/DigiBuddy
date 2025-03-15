import pyautogui
import pytesseract
from PIL import Image
import schedule
import time

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Capture the screen
def capture_screen():
    screenshot = pyautogui.screenshot()
    screenshot.save("screen.png")
    print("Screen captured and saved as screen.png")

# Extract text from the screenshot
def extract_text():
    image = Image.open("screen.png")
    text = pytesseract.image_to_string(image)
    print("Text extracted from screen:", text)
    return text

# Save the extracted text to a file
def save_text_to_file(text):
    with open("screen_data.txt", "a") as file:
        file.write(text + "\n\n")
    print("Text saved to screen_data.txt")

# Capture screen, extract text, and save to file
def capture_and_save():
    print("Capturing screen and saving text...")
    capture_screen()
    text = extract_text()
    save_text_to_file(text)

# Schedule the process to run every 10 seconds
schedule.every(10).seconds.do(capture_and_save)

# Run the scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(1)
