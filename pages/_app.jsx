import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='min-h-screen bg-backgroundLighter dark:bg-backgroundDarker'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
