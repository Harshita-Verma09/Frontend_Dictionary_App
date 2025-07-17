# Dictionary App

A simple and responsive Dictionary App built with **HTML**, **CSS**, and **JavaScript**.  
This app allows users to search for English word definitions, synonyms, antonyms, and examples using the [Free Dictionary API](https://dictionaryapi.dev/).

---

## Features

- Search for any English word
- Displays:
  - Word and part of speech
  - Definition
  - Synonyms and antonyms
  - Example usage (if available)
  - Link to more information
- Responsive design for desktop and mobile
- Error handling for words not found

---

## Folder Structure

```
.
├── index.html         # Main HTML file
├── index.css          # Main CSS file
├── index.js           # JavaScript logic for fetching and displaying word info
├── Gen.js             # (Optional) Additional JS logic
└── README.md          # Project documentation
```

---

## How to Use

1. **Clone or Download the Repository**
   ```sh
   git clone https://github.com/your-username/dictionary-app.git
   cd dictionary-app
   ```

2. **Open in Browser**
   - Open `index.html` in your web browser.

3. **Search for a Word**
   - Enter a word in the input field and click "Search" to see its definition and related information.

---

## Customization

- **Styling:**  
  Edit `index.css` to change colors, fonts, or layout.
- **API:**  
  The app uses [dictionaryapi.dev](https://dictionaryapi.dev/). You can switch to another dictionary API by updating the fetch URL in `index.js`.

---

## Credits

- [dictionaryapi.dev](https://dictionaryapi.dev/) for the free dictionary API
- Fonts from [Google Fonts](https://fonts.google.com/)

---
