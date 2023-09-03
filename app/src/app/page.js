import Author from "./data/Author";

export default function Home() {
    const itemsCount = 4;
    return (
        <div className="hero flex flex-row items-center justify-content bg-base-200">
            <div className="hero-content text-center">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">{Author.fullName}</h1>
                    <p className="py-6">
                        {Author.shortAbout}
                    </p>
                    <button className="btn btn-primary shadow-none">Get Started</button>
                </div>
            </div>
        </div>
    );
}
