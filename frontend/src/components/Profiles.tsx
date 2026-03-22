import ViktorFrom from '../assets/fil_002.jpg';

export default function Profiles() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Profiles</h2>
            <img src={ViktorFrom} alt="Viktor From" className="w-32 h-32 rounded-full mb-4" />
            <p className="text-gray-300">Viktor From\\Embedded Software Engineer</p>
        </div>
    );  
}