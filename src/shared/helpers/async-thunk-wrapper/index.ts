import { type AsyncThunkAction } from '@reduxjs/toolkit'

import { type RootState } from 'app/store'

type ActionCreator<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>

export class AsyncThunkWrapper<Return, Arg, RejectValue> {
	getState: () => RootState
	dispatch: jest.MockedFn<any>
	actionCreator: ActionCreator<Return, Arg, RejectValue>

	constructor(actionCreator: ActionCreator<Return, Arg, RejectValue>) {
		this.actionCreator = actionCreator
		this.getState = jest.fn()
		this.dispatch = jest.fn()
	}

	callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		return action(this.dispatch, this.getState, null)
	}
}
