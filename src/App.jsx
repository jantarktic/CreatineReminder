import GlobalStyle, { Container, Section, MainHeading } from './globalStyles';
import GlobalFonts from './fonts/fonts'
import Navbar from './components/Navbar/Navbar';
import Window from "./components/Window/Window";

export default function App() {
  return (
    <Section $smPadding="70px 0 0 0">
      <GlobalStyle />
      <GlobalFonts />
      <Navbar />
      <Container>
        <MainHeading>
          This is Your Creatine Reminder
        </MainHeading>
        <Window />
      </Container>
    </Section>
  )
}
