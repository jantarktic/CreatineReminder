import GlobalStyle, { MainHeading } from './globalStyles';
import GlobalFonts from './fonts/fonts'
import Window from "./components/Window/Window";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <MainHeading>
        This is Your Creatine Reminder 👊
      </MainHeading>
      <Window />
    </>
  )
}
