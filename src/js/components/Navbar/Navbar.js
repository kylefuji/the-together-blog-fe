import {DEV_URL, STATIC, IMAGES} from "../../constants/URLConstants.js"

function Navbar() {
    return(
        <div className="h-screen bg-purple-100 flex flex-col">
            <div className="inline-flex">
                <a href="#">
                    <img className="h-8" src={DEV_URL + STATIC + IMAGES + "heart.svg"} alt=""></img>
                </a>
                <a href="#">
                    The Together Blog
                </a>
            </div>
            <a href="#" class="text-indigo-600 hover:underline">Home</a>
            <a href="#" class="text-gray-600 hover:underline">Albums</a>
            <a href="#" class="text-gray-600 hover:underline">Posts</a>
            <a href="#" class="text-gray-600 hover:underline">About Us</a>
            <a href="#" class="text-gray-600 hover:underline">Contact</a>
        </div>
    );
}

export default Navbar;