import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Syllabus from './Syllabus';
import Management from './Management';
import Infrastructure from './Infrastructure';
import Testimonial from './Testimonial';
import Programme from './Programme';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <Syllabus />
      <Management />
      <Infrastructure />
      <Programme/>
      <Contact/>
    </div>
  );
}

export default App;
