import React from "react";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-primary-darker py-6 px-4 text-white">
			<ul className="flex justify-evenly flex-wrap">
				<li className="py-5">
					<h3 className="font-bold mb-4">Contact</h3>
					<p className="mb-4">
						Priors Park Chapel is situated in
						<address>Queens Road, Tewkesbury GL20 5EY</address>
					</p>
					<p className="mb-4">
						For further information, contact Us:
						<address>
							<a
								className="block hover:text-gray-300"
								href="mailto:office@priorsparkcommunitychurch.co.uk"
							>
								office@priorsparkcommunitychurch.co.uk
							</a>
						</address>
					</p>
					<p>Nigel Haddow (church leader):</p>
					<p className="italic">Tel: 01684 292610</p>
					<p className="italic">Mob: 07970 013426</p>
				</li>
				<li className="py-5">
					<h3 className="font-bold mb-4">Links</h3>
					<a className="block hover:text-gray-300" href="https://fiec.org.uk/">
						FIEC (Fellowship of independent evangelical Churches)
					</a>
					<a
						className="block hover:text-gray-300"
						href="http://www.tewkesbury.church/"
					>
						Tewkesbury Churches Together
					</a>
					<a
						className="block hover:text-gray-300"
						href="http://tewkesburycr.co.uk/"
					>
						Tewkesbury Community Response
					</a>
					<a
						className="block hover:text-gray-300"
						href="https://en-gb.facebook.com/Priors.Park.Chapel/"
					>
						Facebook page
					</a>
				</li>
			</ul>
		</footer>
	);
};
