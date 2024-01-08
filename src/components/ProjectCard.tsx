import { GithubButton } from "./GithubButton"

type Props = {
	image: string
	title: string
	alt: string
	link: string
	description: string
}

export function ProjectCard(props: Props) {
	return (
		<div className="min-w-[w-52] min-h-[250px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl flex items-center justify-center 
		my-10 lg:my-0">
			<div className="bg-slate-700 rounded-lg flex flex-col justify-center items-center gap-2 h-[97%] w-[97%] p-10 
	">
				<div className="w-full h-44 bg-green-300">
					<img className="w-full h-full object-cover" src={props.image} alt={props.alt} />
				</div>
				<h3 className="font-helvetica text-2xl text-fuchsia-400">{props.title}</h3>
				<h4>
					{props.description}
				</h4>
				<GithubButton link={props.link} />
			</div>
		</div>
	)
}