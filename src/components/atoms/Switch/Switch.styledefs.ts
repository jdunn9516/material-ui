export type ISwitchStyleKey =
  | 'host'
  | 'host$disabled'
  | 'switch'
  | 'switch$selected'
  | 'input'
  | 'track'
  | 'track$disabled'
  | 'track$selected$disabled'
  | 'background'
  | 'background$disabled'
  | 'trackBackground'
  | 'trackBackground$selected'
  | 'trackBackground$disabled'
  | 'trackBackground$disabled$selected'
  | 'handleContainer'
  | 'handleContainer$disabled'
  | 'handleContainer$selected'
  | 'handle'
  | 'handle$selected'
  | 'handle$loading'
  | 'handle$disabled'
  | 'handle$disabled$selected'
  | 'handle$withIcon'
  | 'handleBackground'
  | 'handleBackground$selected'
  | 'handleBackground$disabled'
  | 'handleBackground$disabled$selected'
  | 'icons'
  | 'icon'
  | 'icon$size'
  | 'icon$size$selected'
  | 'icon$on'
  | 'icon$on$disabled'
  | 'icon$on$selected'
  | 'icon$on$selected$disabled';

export type ISwitchStyleVarKey =
  | 'trackShape'
  | 'trackWidth'
  | 'trackHeight'
  | 'trackColor'
  | 'trackColor$disabled'
  | 'trackOpacity$disabled'
  | 'trackColor$focus'
  | 'trackColor$hover'
  | 'trackColor$pressed'
  | 'selectedTrackColor'
  | 'selectedTrackColor$disabled'
  | 'selectedTrackColor$focus'
  | 'selectedTrackColor$hover'
  | 'selectedTrackColor$pressed'
  | 'trackOutlineWidth'
  | 'trackOutlineColor'
  | 'trackOutlineColor$disabled'
  | 'trackOutlineColor$focus'
  | 'trackOutlineColor$hover'
  | 'trackOutlineColor$pressed'
  | 'handleShape'
  | 'handleColor'
  | 'handleWidth'
  | 'handleHeight'
  | 'handleWidth$withIcon'
  | 'handleHeight$withIcon'
  | 'handleColor$disabled'
  | 'handleOpacity$disabled'
  | 'handleColor$hover'
  | 'handleColor$focus'
  | 'handleColor$pressed'
  | 'handleWidth$pressed'
  | 'handleHeight$pressed'
  | 'selectedHandleColor'
  | 'selectedHandleWidth'
  | 'selectedHandleHeight'
  | 'selectedHandleColor$disabled'
  | 'selectedHandleOpacity$disabled'
  | 'selectedHandleColor$focus'
  | 'selectedHandleColor$hover'
  | 'selectedHandleColor$pressed'
  | 'iconColor'
  | 'iconSize'
  | 'iconColor$disabled'
  | 'iconOpacity$disabled'
  | 'iconColor$focus'
  | 'iconColor$hover'
  | 'iconColor$pressed'
  | 'selectedIconColor'
  | 'selectedIconSize'
  | 'selectedIconColor$disabled'
  | 'selectedIconOpacity$disabled'
  | 'selectedIconColor$focus'
  | 'selectedIconColor$hover'
  | 'selectedIconColor$pressed'
  | 'stateLayerShape'
  | 'stateLayerSize'
  | 'stateLayerColor$hover'
  | 'stateLayerOpacity$hover'
  | 'stateLayerColor$focus'
  | 'stateLayerColor$pressed'
  | 'stateLayerOpacity$pressed'
  | 'selectedStateLayerColor$hover'
  | 'selectedStateLayerOpacity$hover'
  | 'selectedStateLayerColor$pressed'
  | 'selectedStateLayerOpacity$pressed';

export type ISwitchStyleStateVarKey =
  | 'trackColor'
  | 'stateLayerColor$hover'
  | 'stateLayerOpacity$hover'
  | 'stateLayerColor$pressed'
  | 'stateLayerOpacity$pressed'
  | 'selectedIconTransform$on'
  | 'iconColor';