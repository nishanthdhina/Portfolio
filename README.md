# Modern Developer Portfolio

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live%20Demo-blue?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/github/license/nishanthdhina/Portfolio?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

A modern, high-performance, and customizable portfolio template built for developers and designers. This template provides a sleek interface to showcase your skills, projects, and achievements in a professional manner.

## ✨ Features

- **Modern Stack** - Built with Next.js 13+, TypeScript, and Tailwind CSS
- **Responsive Design** - Looks amazing on all devices and screen sizes
- **Dark Mode** - Elegant dark theme with subtle animations
- **Performance Optimized** - Achieves 95+ PageSpeed score
- **SEO Ready** - Comprehensive metadata, OpenGraph tags, and more
- **Customizable** - Easily adaptable to your personal brand
- **Animation Effects** - Subtle animations using Framer Motion
- **Contact Form** - Integrated with EmailJS for easy contact
- **Type Animations** - Interactive typing effects
- **Interactive UI** - Engaging user interactions and transitions
- **Accessible** - Follows WCAG guidelines for maximum accessibility

## 🚀 Live Demo

Check out the live demo of this portfolio template [here](#) (Replace with your deployed portfolio URL).

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/nishanthdhina/Portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root of your project with the following variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id 
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio**

## 🎨 Customization Guide

### Personal Information

Edit the data files in the `src/data` directory to change the content:

- **Profile**: Update your name, role, about me, skills, etc.
- **Projects**: Add or modify your projects
- **Experience**: Update your work experience
- **Education**: Add your educational background
- **Contact Information**: Update your social links and contact details

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit the `tailwind.config.js` file to change the color palette
- **Typography**: Update fonts and text styles
- **Layout**: Modify component layouts and spacing

### Adding New Sections

1. Create a new component in the `src/components` directory
2. Import and add it to the `src/app/page.tsx` file
3. Add any required data to the appropriate data file

## 📱 Responsive Design

This portfolio is fully responsive and optimized for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 🔧 Advanced Customization

### Custom Animations

Animations are implemented using CSS and Framer Motion. To customize:

1. Edit animations in the component files
2. Modify transition parameters for different effects

### SEO Optimization

To improve SEO for your portfolio:

1. Update the metadata in `src/app/layout.tsx`
2. Customize the SEO component for each page
3. Ensure all images have proper alt text
4. Maintain proper heading hierarchy

## 📤 Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy your portfolio:

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Configure your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/nishanthdhina/Portfolio)

### Other Deployment Options

- **Netlify**: Similar process to Vercel
- **GitHub Pages**: Use the `npm run build` command and deploy the `out` folder
- **Your Own Server**: Upload the build files to your hosting provider

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [EmailJS](https://www.emailjs.com/) - Email delivery service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

If you have any questions or need assistance, please open an issue or reach out directly through:

- Email: nishanthdhinacontact@gmail.com
- Twitter: [@nishanthdhina](https://twitter.com/nishanthdhina)
- LinkedIn: [Nishanth Dhina](https://linkedin.com/in/nishanth-dhina-4a0a1525a)

---

Made with ❤️ by [Nishanth Dhina](https://github.com/nishanthdhina)
