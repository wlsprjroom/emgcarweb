# EMG Car Web

An interactive emergency medication cabinet reference website built with React and TypeScript.

**Live Demo:** [https://emgcarweb.vercel.app](https://emgcarweb.vercel.app)

## Overview

EMG Car Web is a visual, interactive reference tool designed to help users explore medications stored in an emergency medication cabinet.

Instead of browsing through a traditional list, users can interact with a virtual cabinet, open individual drawers, and select medication items to view detailed information.

The project focuses on providing an intuitive visual experience across desktop and mobile devices.

## Features

- **Interactive Medication Cabinet** – Explore a virtual cabinet with four clickable drawers.
- **Visual Medication Layout** – Medication items are positioned to match their locations inside each drawer.
- **Medication Information** – View detailed information about individual medications, including:
  - Chinese and English names
  - Drug classifications
  - Main indications and uses
  - Mechanisms of action
  - Common side effects
  - Nursing considerations
- **Interactive Effects** – Hover to reveal medication images on desktop.
- **Touch Support** – Supports touch-based interactions on mobile devices.
- **Responsive Design** – Adapts to different screen sizes.
- **Performance Monitoring** – Integrated with Vercel Speed Insights.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| TypeScript | Type safety |
| Vite | Development server and build tool |
| Tailwind CSS 4 | Styling |
| Vercel Speed Insights | Performance monitoring |
| Oxlint | Code linting |

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/wlsprjroom/emgcarweb.git
   ```

2. Navigate to the project directory:

   ```bash
   cd emgcarweb
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal (usually `http://localhost:5173`).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the production version |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
emgcarweb/
├── public/
│   ├── cabinet.webp
│   ├── d1.webp
│   ├── d2.webp
│   ├── d3.webp
│   ├── d4.webp
│   ├── d1/
│   ├── d2/
│   ├── d3/
│   ├── d4/
│   └── font/
│
├── src/
│   ├── components/
│   │   ├── Data/
│   │   │   └── Items.ts
│   │   ├── Cabinet.tsx
│   │   ├── Drawer.tsx
│   │   ├── ItemSlot.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*Note: Some asset folders and component files are abbreviated in this overview.*

## Customization

### Adding or Editing Medication Information

Medication information is managed in:

```text
src/components/Data/Items.ts
```

Each medication entry contains:

- `name` – Medication name.
- `description` – An array of information fields.
- `image` – Path to the medication image.
- `left` – Horizontal position inside the drawer.
- `top` – Vertical position inside the drawer.
- `width` – Width of the interactive area.
- `height` – Height of the interactive area.

You can modify the medication information and positioning directly in this file.

### Managing Drawer Images

Drawer background images and medication images are stored in the `public` directory.

Update the corresponding image paths in the drawer data when replacing assets.

## Deployment

This project is deployed using [Vercel](https://vercel.com/).

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Select Vite as the framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the project.

Vercel can also automatically redeploy the website whenever changes are pushed to the connected GitHub branch.

## Disclaimer

This project is intended for educational and informational reference purposes only.

Medication information should not replace professional medical judgment, official drug references, institutional protocols, or physician instructions.

Always verify medication information against authoritative and up-to-date clinical sources before clinical use.

## License

No license has currently been specified for this repository. All rights are reserved by the respective copyright holders unless otherwise stated.
