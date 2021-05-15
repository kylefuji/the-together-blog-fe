import {DEV_URL, STATIC, IMAGES} from "../../constants/URLConstants.js"

function Navbar() {
    return(
        <div className="h-screen bg-purple-100 flex flex-col space-y-4">
            <a href="#" className="inline-flex space-x-2">
                <img src={DEV_URL + STATIC + IMAGES + "heart.svg"} alt=""></img>
                <span className="text-xl">The Together Blog</span>
            </a>
            <a href="#" class="text-indigo-600 hover:underline">Home</a>
            <a href="#" class="text-gray-600 hover:underline">Albums</a>
            <a href="#" class="text-gray-600 hover:underline">Posts</a>
            <a href="#" class="text-gray-600 hover:underline">About Us</a>
            <a href="#" class="text-gray-600 hover:underline">Contact</a>
        </div>
    );
}

export default Navbar;