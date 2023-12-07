import './App.css';
import ContentNavigator from './components/ContentNavigator';
import ContentSectionLeft from './components/ContentSectionLeft';
import MainBanner from './components/MainBanner';
import SectionBanner from './components/SectionBanner';

function App() {
  return (
    <div className="App">
      <MainBanner />
      <ContentNavigator />
      <div id="methodologies-section">
        <SectionBanner title="METHODOLOGIES" />
        <ContentSectionLeft text="In my professional career, I have acquired in-depth knowledge of various software development methodologies, finding a particular preference for agile methodologies, especially  <span style='color: #00BCD4'>Scrum</span>. This preference is due to its adaptive and collaborative approach, which I consider essential for success in the dynamic field of software development." />
      </div>
      <SectionBanner title="KNOWLEDGES" />
      <SectionBanner title="MY OWN PROJECTS & MORE" />
    </div>
  );
}

export default App;
