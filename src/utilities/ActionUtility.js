// export default class ActionUtility {
//   static async createThunkEffect(dispatch, actionType, effect, ...args) {
//     dispatch(ActionUtility.createAction(actionType));

//     try {
//       const model = await effect(...args);

//       dispatch(ActionUtility.createAction(`${actionType}_FINISHED`, model));

//       return model;
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.error(error);
//     }
//   }

//   static createAction(type, payload, error = false, meta = null) {
//     return { type, payload, error, meta };
//   }
// }
