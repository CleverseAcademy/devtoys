enum ToyEventType {
  FirstRender,
  ReRender,
  TransitionFunctionCall,
}

interface ToyEvent {
  type: ToyEventType
  detail: string
}