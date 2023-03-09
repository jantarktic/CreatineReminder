import GlobalStyle, { Container, Section, MainHeading } from './globalStyles';
import GlobalFonts from './fonts/fonts'
import Navbar from './components/Navbar/Navbar';
import Window from "./components/Window/Window";

export default function App() {
  return (
    <Section>
      <GlobalStyle />
      <GlobalFonts />
      <Navbar />
      <Container>
        <MainHeading>
          This is Your Creatine Reminder
        </MainHeading>
        <Window />
      </Container>
    </ Section>
  )
}
