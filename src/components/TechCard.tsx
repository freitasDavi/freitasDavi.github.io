
type Props = {
	title: string
	image: string
	alt: string
}


export function TechCard(props: Props) {
	return (
		<div id="card" className="bg-slate-800 min-w-[w-52] h-32 rounded-lg flex justify-center items-center gap-2 p-2">
			<img src={props.image} alt={props.alt} />
			<p className="font-helvetica text-2xl text-fuchsia-400">{props.title}</p>
		</div>
	)
}