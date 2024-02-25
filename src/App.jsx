import "./App.css"
import { Analytics } from '@vercel/analytics/react';
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import HomeScreen from "./screens/Home";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import '../i18n';
const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Analytics />
        <HomeScreen />
    </QueryClientProvider>
  )
}

export default App;
