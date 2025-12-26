import Image from "next/image";

type ButtonType = "telegram" | "whatsapp" | "max";

interface SocialButtonProps {
	type: ButtonType;
	color: string;
}

const config: Record<ButtonType, { link: string; label: string } >= {
	telegram: {
		link: "https://t.me/anna_ritual",
		label: "Telegram",
	},
	whatsapp: {
		link: "https://wa.me/79200097412",
		label: "WhatsApp",
	},
	max: {
		link: "https://max.ru/u/f9LHodD0cOIT7N6XceeCgmeeFpIv9GtCguy7PA9WTikniGLgjz0BR-gD8Bo",
		label: "Max",
	}
};

export default function SocialButton({ type, color }: SocialButtonProps) {
	const { link, label } = config[type];
	const ImageLink = `/images/${type}-icon.png`;
	const TextColor = type === "max" ? "text-black" : "text-white";

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md ${TextColor} text-lg font-medium transition-transform duration-300 hover:scale-105 active:brightness-75 min-w-50`}
			style={{ backgroundColor: color }}
		>
			<Image src={ImageLink} alt={label} width={24} height={24} />
			{label}
		</a>
	);
}
