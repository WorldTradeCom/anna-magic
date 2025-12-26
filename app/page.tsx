import SocialButton from "../components/SocialButton";

export default function Home() {
	return (
		<div
			className="flex flex-col items-center justify-center text-white text-center bg-cover bg-center fixed inset-0"
			style={{
				backgroundImage: "url('/images/background.jpg')",
				height: "100dvh"
			}}
		>
			<h1 className="text-5xl font-bold mb-2 drop-shadow-lg">АННА Колдунья</h1>
			<h2 className="text-2xl mb-4 drop-shadow-lg">Ритуалы | Чистки</h2>
			<h3 className="text-2xl -mt-2 drop-shadow-lg">Привороты</h3>

			<div className="flex flex-wrap justify-center gap-4 mt-6">
				<SocialButton type="telegram" color="#0088cc" />
				<SocialButton type="whatsapp" color="#25d366" />
				<SocialButton type="max" color="#c9c9c9" />
			</div>
		</div>
	);
}