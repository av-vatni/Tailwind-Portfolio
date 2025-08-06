# 🚀 AV's Portfolio - Modern React & Tailwind CSS

A sleek, responsive personal portfolio website built with React and Tailwind CSS. Features a modern design with dark/light theme toggle, smooth animations, and a professional presentation of projects and skills.

## 🌐 Live Demo

**[View Live Portfolio](https://av-vatni.netlify.app/)**

## 🛠️ Tech Stack

- **Frontend Framework:** React.js 18
- **Styling:** Tailwind CSS 4.0
- **Markup:** JSX
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons
- **Deployment:** GitHub Pages

## ✨ Features

- 🎨 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 📱 **Mobile-First Approach** - Seamless experience across all screen sizes
- 🎭 **Smooth Animations** - Engaging interactions powered by Framer Motion
- 📋 **Project Showcase** - Interactive project cards with GitHub links
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎯 **Modern UI/UX** - Clean, professional design with intuitive navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/av-vatni/Tailwind-Portfolio.git
   cd Tailwind-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Tailwind-Portfolio/
├── public/                 # Static assets
│   └── resume.pdf         # Resume file
├── src/
│   ├── assets/            # Images and media files
│   │   ├── av_img_coat.jpg
│   │   ├── AV-logo.png
│   │   ├── background.jpg
│   │   └── social-icons/
│   ├── Components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Cards.jsx      # Project cards
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Header.jsx     # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   └── Project.jsx    # Projects section
│   ├── Data/              # Data files
│   │   └── projects.js    # Project data
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Key Components

- **Header.jsx** - Hero section with animated text and call-to-action
- **Navbar.jsx** - Navigation with theme toggle and smooth scrolling
- **About.jsx** - Personal information and skills showcase
- **Project.jsx** - Interactive project gallery with filtering
- **Contact.jsx** - Contact form with validation
- **Footer.jsx** - Social links and additional information

## 🎨 Customization

### Adding New Projects

Edit `src/Data/projects.js` to add your projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description here',
    link: 'https://your-project-link.com',
    image: 'path/to/project-image.jpg',
  },
  // Add more projects...
];
```

### Styling

- Modify `tailwind.config.js` for theme customization
- Update component styles in individual `.jsx` files
- Global styles can be modified in `src/index.css`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **LinkedIn:** [AV Vatni](https://linkedin.com/in/av-vatni)
- **Email:** [av.vatni@example.com](mailto:av.vatni@example.com)
- **GitHub:** [@av-vatni](https://github.com/av-vatni)

## ⭐ Show Your Support

If you find this portfolio template helpful, please give it a ⭐ on GitHub!

```bash
# Star this repository
gh repo star av-vatni/Tailwind-Portfolio
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by AV Vatni**

*Feel free to use this template for your own portfolio!*
