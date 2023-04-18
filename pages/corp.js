import Spline from '@splinetool/react-spline';
import Nav from '../components/Nav'



export default function article() {
    return (
        <div>
        <Nav/>

        <section className="dark:bg-transparent dark:text-black">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-3xl font-bold leading-none sm:text-4xl truncate pr-0">Капитал Pro<br/>
                Корпоративен абонамент
                </h1>
                <h3 className="mt-6 mb-8 text-2xl sm:mb-12 font-semibold">Предимството на успешните бизнеси
               
                    </h3>
                
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
                </div>
            </div>
            <div className="flex items-center justify-center p-0 mt-2 lg:mt-0 h-72 sm:h-96 lg:h-96 xl:h-124 2xl:h-128 max-w-128 ">
            <Spline scene=" https://prod.spline.design/NCAsyR6RKp4gVrYM/scene.splinecode" className=" -z-50 overflow-hidden  my-8 ml-0 mt-16 px-0 sm:px-4 py-8 h-16 w-16 sm:h-32 sm:w-32  max-h-108 max-w-108" />

   
            </div>
        </div>
    </section>
    </div>
        )
    }