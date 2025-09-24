# Smart Unit Converter 

A clean, fast unit converter that actually works the way you'd expect. No ads, no bloat, just quick conversions with a modern interface.

## What It Does

Converts between different units across 6 categories with real-time results. Features include unit swapping, conversion history, adjustable precision, and a responsive design that works on any device.

## Why I Built This

Got tired of clunky conversion sites loaded with ads. I wanted something simple that would help me practice DOM manipulation and responsive design while solving a real problem I face daily.

## Tech Stack

- **HTML5** + **CSS3** - Clean, semantic structure
- **JavaScript (ES6+)** - Object-oriented approach with classes  
- **Tailwind CSS** - Fast styling without custom CSS bloat

## Quick Start

```bash
git clone https://github.com/Kimiya00/unit-converter
cd unit-converter
open index.html
```

That's it. No build process, no dependencies.

**[Try it live →](https://kimiya00.github.io/unit-converter)**

## Key Features

- 6 conversion categories (temperature, length, mass, volume, area, speed)
- Real-time conversion as you type
- Swap units with one click
- Conversion history tracking
- Custom decimal precision
- Fully responsive design

## How to Use

**Basic conversion:**
- Select category (temperature, length, etc.)
- Enter your value
- Choose from/to units
- See instant results

**Advanced features:**
- Click ⇄ to swap units
- Adjust decimal precision (0-10 places)
- View recent conversions in history

## Challenges I Solved

**Different conversion types:** Temperature isn't linear like length/mass
- Used base-unit system (everything converts through Celsius/meters/kg first)

**Mobile responsiveness:** Complex layouts breaking on phones  
- Started mobile-first, then enhanced for desktop

**Input validation:** Preventing crashes from invalid numbers
- Added NaN checks and clear error messages

**Code organization:** Keeping JavaScript maintainable
- Used ES6 classes to separate concerns cleanly

## What I Learned

- How to structure JavaScript with classes for better organization
- Mobile-first responsive design actually saves debugging time
- Base-unit conversion patterns work for any measurement system
- User input validation is more important than I initially thought

## Browser Support

Works in Chrome 60+, Firefox 55+, Safari 12+, and modern mobile browsers.

## Contact

**Kimiya Razdar**  
Razdarkim@gmail.com  
[GitHub](https://github.com/Kimiya00)

---

Built with JavaScript, curiosity, and probably too much coffee. 