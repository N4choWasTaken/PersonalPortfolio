import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Command {
	message: string,
	state: string,
	prefix: string
}

interface TerminalState {
  clear(): void
  outputs: Command[]
  append: (command: Command) => void
}

const TerminalStore = create<TerminalState>()
	((set) => ({
        outputs: [],
        append: (command: Command) => {
			const newOutputs = [command];
			set((state: TerminalState) => ({outputs: state.outputs.concat(newOutputs)}))
		},
		clear: () => set(() => ({outputs: []}))
    }),
)

export default TerminalStore
