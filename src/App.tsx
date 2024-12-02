import { Controls, MiniMap, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "./Nodes";

const App = () => {
	return (
		<div className="w-screen h-screen">
			<ReactFlow
				nodeTypes={nodeTypes}
				defaultNodes={[
					{
						id: "0",
						type: "StartNode",
						position: {
							x: 0,
							y: 0,
						},
						data: {},
					},
				]}
				defaultEdgeOptions={{
					type: "smoothstep",
				}}
				fitView
			>
				<Controls />
				<MiniMap />
			</ReactFlow>
		</div>
	);
};

export default App;
