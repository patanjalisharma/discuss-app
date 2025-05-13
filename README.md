# 🔨 Discuss App

A lightweight full-stack discussion app built with **Next.js**, **TypeScript**, **Prisma**, and **SQLite**. Users can post discussions, reply recursively, and search topics using slug-based routing.

> 🚧 This project is built for learning purposes and runs locally using SQLite.

---

## ✨ Features

* Recursive rendering of nested replies
* Slug-based dynamic search
* Zod-based validation and error handling
* Fully responsive and accessible UI
* Clean architecture and component-based design

---

## 🛠️ Tech Stack

* **Next.js 14**
* **TypeScript**
* **Prisma ORM**
* **SQLite (local development)**
* **Zod** for schema validation

---

## 🚀 Getting Started

Follow the steps below to clone the repo and run the app locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/discuss-app.git
cd discuss-app
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Set up the database

Initialize the SQLite database using Prisma:

```bash
npx prisma migrate dev --name init
```

If needed, also generate the Prisma client:

```bash
npx prisma generate
```

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the app in action.

---

## 🧪 Running Locally

This app uses **SQLite**, which works perfectly for local development but is not recommended for production deployments on most platforms. However, you're free to explore and experiment by cloning the repo!

---

## 🤝 Feedback

If you find this project useful or have suggestions, feel free to open an issue or drop feedback. I'm actively learning and appreciate every bit of input!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
