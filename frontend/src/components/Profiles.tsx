import ViktorFrom from '../assets/fil_002.jpg';

export default function Profiles() {
    return (
        <div className="p-4 w-64 h-64 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Profiles</h2>
            <img src={ViktorFrom} alt="Viktor From" className="w-auto h-auto square mb-4" />
            <p className="text-gray-300">Viktor From</p>
            <p className="text-gray-400">Embedded Software Engineer</p>
        </div>
    );  
}