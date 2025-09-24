# Web Calculator 

A clean, responsive calculator that actually works the way you'd expect. No frameworks, just solid JavaScript fundamentals.

## What It Does

Handles basic arithmetic with keyboard support, calculation history, and a modern glassmorphism design. Works on any device without feeling cramped or clunky.

## Why I Built This

Wanted to create something that looked modern but worked everywhere, no build tools, no dependencies, just clean code that runs in any browser. Started as a basic calculator but kept adding features as I thought of edge cases users might encounter.

The history feature came from personal frustration; having a calculator that remembers previous calculations is essential.

## Tech Stack

- **HTML5** + **CSS3** - Grid, Flexbox, custom properties
- **Vanilla JavaScript** - Pure JS, no frameworks
- **Tailwind CSS** - Base styling without the bloat

## Quick Start

```bash
git clone https://github.com/Kimiya00/Calculator.git
cd Calculator
open index.html
```

Or just download and double-click `index.html`. No server needed.

**[Try it live →](https://kimiya00.github.io/Calculator)**

## Key Features

- Basic arithmetic operations (+, -, ×, ÷)
- Full keyboard support (numbers, operators, Enter, Escape)
- Calculation history with one-click access
- Error handling for edge cases
- Mobile-friendly responsive design
- Modern glassmorphism UI

## How to Use

**Keyboard shortcuts:**
- Numbers: `0-9`
- Operations: `+ - * /`
- Calculate: `Enter` or `=`
- Clear: `Escape` or `C`
- Delete: `Backspace`
- History: Click the button

## Challenges I Solved

**State management without frameworks:** Keeping track of operands and operations across multiple calculations
- Built a simple state system that handles operator chaining naturally

**Input validation:** Preventing overflow and edge case crashes
- Added comprehensive checks for division by zero, invalid operations, and number limits

**Responsive design:** Making it work on phones without feeling cramped
- Used CSS Grid with careful touch target sizing

**Keyboard integration:** Full keyboard support without breaking browser shortcuts
- Captured specific keys while preserving browser functionality

## What I Learned

The trickiest part was getting operator chaining to feel natural - like when you type `5 + 3 * 2` and expect it to work intuitively. Had to think through the order of operations and when to evaluate intermediate results.

Also spent way too much time perfecting the button hover animations, but they make it feel more polished.

## Browser Support

Works in all modern browsers - Chrome 90+, Firefox 88+, Safari 14+, and mobile browsers.

## Future Enhancements

- [ ] Scientific calculator mode
- [ ] Memory functions (M+, M-, MR)
- [ ] Export calculation history

## Contact

**Kimiya Razdar**  
Razdarkim@gmail.com  
[GitHub](https://github.com/Kimiya00)

---

Built with JavaScript, math, and probably too much coffee. 