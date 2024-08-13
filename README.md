# CoinGecko-AI

<img src="https://i.imgur.com/s9HSENw.jpg" alt="cover_image" width="0" />

## Description

CoinGecko-AI: Your intelligent companion for real-time cryptocurrency insights and price tracking powered by advanced AI.

CoinGecko-AI is a cutting-edge project that combines the power of artificial intelligence with real-time cryptocurrency data from CoinGecko. This innovative tool provides users with intelligent insights, price predictions, and personalized recommendations for cryptocurrency investments. By leveraging machine learning algorithms and natural language processing, CoinGecko-AI offers a unique and intuitive way to navigate the complex world of digital assets, making it an invaluable resource for both novice and experienced crypto enthusiasts.

[![Agent Demo](https://img.shields.io/badge/Demo-Visit%20Demo-orange)](https://wallet.bitte.ai/smart-actions/prompt/what%20can%20you%20help%20me%20with?mode=debug&agentId=coingecko-ai.vercel.app)
[![Demo](https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen)](https://coingecko-ai-demo.vercel.app/)
[![Deploy](https://img.shields.io/badge/Deploy-Deploy%20Now-blue)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fcoingecko-ai)


**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-Cryptocurrency%20Analysis,Price%20Prediction-blue)](#)
[![Tools](https://img.shields.io/badge/Tools-CoinGecko%20API,TensorFlow-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-NextJS%2014-blue)](#)

## Project Walkthrough

<img src="https://github.com/user-attachments/assets/c59dcf62-fdfe-40d6-a128-073c16a9479f" alt="detail_image" width="500"/>

CoinGecko-AI is built using Next.js 14 and integrates seamlessly with the CoinGecko API to fetch real-time cryptocurrency data. The project structure is organized as follows:

- `/pages`: Contains the main application pages, including the dashboard and individual cryptocurrency views.
- `/components`: Reusable React components for UI elements and data visualization.
- `/lib`: Helper functions and API integration logic.
- `/models`: AI models for price prediction and sentiment analysis.

To run the project locally:

1. Clone the repository: `git clone https://github.com/yourusername/coingecko-ai.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Copy `.env.example` to `.env.local` and fill in your CoinGecko API key.
4. Run the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser to view the application.

## Deployment

To deploy CoinGecko-AI on Vercel:

1. Fork the repository to your GitHub account.
2. Sign up for a Vercel account if you haven't already.
3. Click the "Deploy" button above or go to https://vercel.com/new.
4. Select your forked repository.
5. Configure the following environment variables:
   - `COINGECKO_API_KEY`: Your CoinGecko API key
   - `NEXT_PUBLIC_APP_URL`: The URL of your deployed application
6. Click "Deploy" and wait for the build to complete.

Once deployed, you can access your CoinGecko-AI instance at the provided Vercel URL. You can customize the application by modifying the source code and pushing changes to your repository. Vercel will automatically redeploy your application with the latest changes.

For any issues or questions regarding deployment, please refer to the Vercel documentation or open an issue in the project repository.
