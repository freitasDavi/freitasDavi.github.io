

export function GithubButton({ link }: { link: string }) {
	return (
		<a href={link} className="cursor-pointer bg-black text-white rounded-xl px-4 flex gap-2 py-2 font-helvetica text-md
	hover:bg-slate-900">
			view code
			<img src="/svg/icons8-github.svg" alt="Github logo" />
		</a>
	)
}