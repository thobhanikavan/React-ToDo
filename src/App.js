
import './App.css'; 
import Header from './components/header/Header.jsx';
import AddIteam from './components/addIteam/AddIteam.jsx';
import ListOfIteam from './components/listOfIteam/ListOfIteam.jsx';

export const App = () => {
  return (
    <div className='h-screen bg-gray-500'>
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
   	 <div className="absolute bg-grey opacity-80 inset-0 z-0"></div>
    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div class="mb-4"></div>
           
            <Header />
            <AddIteam />
     
     
        </div>
      </div>
    </div>  

  );
}