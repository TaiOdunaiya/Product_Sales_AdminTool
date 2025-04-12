# Product Sales Admin Tool

A modern, responsive admin dashboard built with Angular for managing product sales, tracking transactions, and visualizing business metrics.

## Features

- 📊 Interactive Charts and Analytics
  - Monthly sales trends by region
  - Sales distribution by category
  - Top performing products

- 💼 Transaction Management
  - Real-time transaction tracking
  - Status updates (Pending, Shipped, Confirmed)
  - Detailed transaction information

- 🎨 Modern UI/UX
  - Responsive design
  - Dark/Light mode toggle
  - Clean and intuitive interface
  - Ripe Blues color scheme

## Tech Stack

- Angular 18.1.0
- Highcharts for data visualization
- Font Awesome icons
- SCSS for styling

## Prerequisites

- Node.js (Latest LTS version)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd Product_Sales_AdminTool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── header/             # Application header with theme toggle
│   ├── side-nav/          # Navigation sidebar
│   ├── top-widgets/       # Dashboard KPI widgets
│   ├── sales-by-month/    # Monthly sales chart
│   ├── sales-by-category/ # Category distribution chart
│   ├── last-few-transactions/ # Recent transactions list
│   └── top-three-products/    # Top products chart
├── assets/                # Static assets
└── styles/               # Global styles and themes
```

## Color Scheme

The application uses the Ripe Blues color palette:
- Primary Light: #0ACDEB
- Primary Medium: #089AB0
- Primary Dark: #005A7A
- Accent Teal: #056776
- Accent Light: #99F1FF

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
