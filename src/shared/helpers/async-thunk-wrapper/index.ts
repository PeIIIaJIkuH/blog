import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'

import { type RootState } from 'app/store'

type ActionCreator<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>

jest.mock('axios')

export class AsyncThunkWrapper<Return, Arg, RejectValue> {
	getState: () => RootState
	dispatch: jest.MockedFn<any>
	actionCreator: ActionCreator<Return, Arg, RejectValue>
	api: jest.Mocked<AxiosStatic>

	constructor(actionCreator: ActionCreator<Return, Arg, RejectValue>) {
		this.actionCreator = actionCreator
		this.getState = jest.fn()
		this.dispatch = jest.fn()
		this.api = axios as jest.Mocked<typeof axios>
	}

	callThunk(arg: Arg) {
		const action = this.actionCreator(arg)
		return action(this.dispatch, this.getState, { api: this.api })
	}
}
