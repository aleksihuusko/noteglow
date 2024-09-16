# Noteglow

**Noteglow** is your bright and intuitive note-taking companion. Capture ideas, stay organized, and keep your creativity flowing effortlessly.

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Contributing](#contributing)
- [License](#license)

## About the Project

Noteglow is a sleek and minimal note-taking app designed to help you organize your thoughts and ideas. Built with modern technologies, it is fast, scalable, and integrates seamlessly with powerful database and UI libraries.

## Tech Stack

- **[Next.js](https://nextjs.org/)**: A React framework for building fast and scalable applications.
- **[Supabase](https://supabase.com/)**: An open-source Firebase alternative for handling authentication, databases, and storage.
- **[Drizzle ORM](https://orm.drizzle.team/)**: A lightweight TypeScript ORM for simplifying database operations.
- **[shadcn/ui](https://ui.shadcn.dev/)**: A set of accessible and customizable UI components for building modern UIs with ease.

## Features

- Fast and responsive note-taking interface.
- Secure user authentication and data storage powered by Supabase.
- Customizable themes and modern UI components via shadcn/ui.
- Organized note management with folders and tags.
- Full database control and flexibility with Drizzle ORM.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) as the package manager
- A Supabase account for setting up the database and authentication

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/noteglow.git
   ```

2. Navigate into the project directory:

   ```bash
   cd noteglow
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
DATABASE_URL=your_database_url
```

Make sure you replace the placeholders with your actual Supabase credentials.

### Running the App

To run the app in development mode:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

This will create an optimized version of your application.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request, or open an issue for feature requests or bugs.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/new-feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
