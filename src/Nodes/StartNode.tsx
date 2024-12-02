import SampleImage from "../sample.jpeg";

const StartNode = () => (
	<div>
		<div
			style={{ backgroundImage: `url(${SampleImage})` }}
			className="w-[400px] h-[400px]"
		/>
	</div>
);

export default StartNode;
