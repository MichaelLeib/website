# Professional CV Website

A modern, responsive CV website built with Angular 17+, featuring a sleek glass morphism design with smooth animations.

## 🚀 Features

- **Modern Design**: Glass morphism UI with blue/white color scheme
- **Responsive**: Optimized for all device sizes
- **Smooth Animations**: Professional animations throughout
- **Multi-Language Support**: English and German language switching
- **Performance Optimized**: Fast loading and optimized bundle sizes
- **GitHub Pages Ready**: Automated deployment workflow included
- **Accessibility**: Proper focus management and reduced motion support
- **Modular Architecture**: Clean separation between data and presentation
- **Custom Favicon**: Sleek Angular logo favicon matching the site's blue glass morphism style (SVG and PNG)

## 🛠️ Tech Stack

- **Angular 17+** - Modern Angular with standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced CSS with variables and mixins
- **RxJS** - Reactive programming for data management
- **GitHub Actions** - Automated CI/CD pipeline

## 📦 Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Update CV Data**
   Edit `src/app/services/cv-data.service.ts` with your personal information:

   - Personal info (name, email, social links)
   - Skills and expertise levels
   - Professional experience
   - Projects and achievements

4. **Development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

## 🎨 Customization

### Personal Information

Update the personal information in `src/app/services/cv-data.service.ts`:

```typescript
personalInfo: {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  location: 'Your Location'
}
```

### Favicon

A custom favicon is included by default, featuring a modern Angular logo with a blue gradient and glass morphism effect to match the site's style. This favicon is provided in both SVG (`src/favicon.svg`) and PNG (`src/favicon-32x32.png`) formats for maximum browser compatibility. Modern browsers will use the SVG, while older browsers will fall back to the PNG or ICO.

To change the favicon:

1. Replace `src/favicon.svg` with your own SVG (recommended for best quality)
2. Optionally update `src/favicon-32x32.png` and `src/favicon.ico` for legacy support
3. Update the `<link rel="icon" ...>` tags in `src/index.html` if you use a different filename or format

### Design System

The design system uses CSS custom properties defined in `src/styles.scss`:

- Colors and gradients
- Spacing and typography
- Glass morphism effects
- Animation timings

### Components

- `AboutSectionComponent` - About me section with stats
- `SkillsSectionComponent` - Skills with animated progress bars
- `ExperienceSectionComponent` - Professional timeline
- Additional components can be added as needed

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**

   - Go to your repository settings
   - Enable GitHub Pages from the Actions tab

2. **Automatic Deployment**

   - Push to main branch triggers automatic deployment
   - The workflow builds and deploys to GitHub Pages

3. **Manual Deployment**
   ```bash
   npm run deploy
   ```

### Local Production Build

```bash
npm run build:prod
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎯 Performance

- Optimized bundle sizes
- Lazy loading for animations
- Efficient CSS with minimal render blocking
- Responsive images and SVG icons

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own CV website. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Support

If you have questions or need help customizing this template, feel free to open an issue.

---

**Built with ❤️ using Angular and modern web technologies**
