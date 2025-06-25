# 🌟 Manan Joshi | Portfolio Website

Welcome to the source code of my **personal portfolio website** — a digital space crafted to reflect who I am as a developer, problem solver, and tech enthusiast. This website is built using modern web technologies like **React**, **styled-components**, and **Animate.css** to deliver a smooth, interactive, and responsive user experience.

Take a peek under the hood to see how the entire site is structured and styled! 🛠️

---

## 🚀 Features

- Clean, modern & fully responsive design
- Smooth entrance animations
- Modular, maintainable React components
- Contact form powered by Formspree + Google reCAPTCHA
- SEO & social media optimized meta tags
- Google Search Console verification via meta tag
- Sitemap integration for better indexing
- Dedicated sections : About Me, Skills, Experience, and more

---

## 🛠️ Tech Stack

| 🌐 Technology       | 📖 Documentation                                   |
|---------------------|----------------------------------------------------|
| **React**           | [React Docs](https://react.dev/)                   |
| **Styled Components** | [Styled Docs](https://styled-components.com/)    |
| **Animate.css**     | [Animate.css Docs](https://animate.style/)         |
| **Formspree**       | [Formspree Docs](https://formspree.io/)            |
| **Google reCAPTCHA**| [reCAPTCHA Docs](https://www.google.com/recaptcha/) |
| **Vite**            | [Vite Docs](https://vitejs.dev/)                   |

---

## 📦 Getting Started

Follow these steps to set up and run the project locally :

<pre>
<code>
git clone https://github.com/Manan-Joshi750/My_Portfolio.git
cd My_Portfolio
</code>
</pre>

### ✅ Install Dependencies

If you face issues with `yarn`, use `npm` instead :

<pre>
<code>
npm install --legacy-peer-deps
</code>
</pre>

> This resolves peer dependency conflicts — especially with `react-animate-on-scroll` which expects an older React version.

---

### ⚙️ Additional Fixes

1. **JSX Runtime Error (react/jsx-runtime not found)**  
   Make sure you have the latest version of React and ReactDOM installed :

   <pre>
   <code>
   npm install react@latest react-dom@latest
   </code>
   </pre>

2. **react-toastify "render not found" error**  
   Downgrade `react-toastify` to a compatible version if needed :

   <pre>
   <code>
   npm install react-toastify@9.1.3
   </code>
   </pre>

3. **Google reCAPTCHA v2 Error (Invalid domain for site key)**  
   Make sure you've added your deployed domain in the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/) and used the correct site key in your code.

---

### 🚀 Start the Development Server

<pre>
<code>
npm run start
</code>
</pre>

Visit 👉 `http://localhost:3000` to view your portfolio live on your local machine.

---

### ⚠️ OneDrive Sync Issue

During setup, if you see a folder named `~` that cannot be synced with OneDrive :

- It's safe to **delete** this folder.  
- It does **not affect** project functionality.

---

## 🚀 Deployment

You can deploy this portfolio on platforms like :

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

After deployment :

- Update your live domain in `public/sitemap.xml`
- Submit sitemap to [Google Search Console](https://search.google.com/search-console/about)
- Add the correct `<meta name="google-site-verification">` tag to the `<head>` of your `index.html` for ownership verification
- Ensure your Formspree form ID is correctly integrated in `Form.tsx`
- Ensure Google reCAPTCHA site key is valid for your domain

> ⚠️ Do **not remove** the `google-site-verification` meta tag after verification.

---

> Designed and developed with ❤️ by **Manan Joshi**

---
