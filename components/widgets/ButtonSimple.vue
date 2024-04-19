<template>
  <button
    type="button"
    :class="{
      button: true,
      active: active,
      small: isSmall,
      'is-on': isOn,
      'is-loading': isLoading,
      'is-primary': isPrimary
    }"
    :title="title"
    @click="$emit('click')"
  >
    <grid-icon :class="iconClass" v-if="icon === 'grid'" />
    <send-icon :class="iconClass" v-if="icon === 'send'" />
    <paperclip-icon :class="iconClass" v-if="icon === 'attach'" />
    <corner-left-down-icon :class="iconClass" v-if="icon === 'undo'" />
    <corner-right-down-icon :class="iconClass" v-if="icon === 'redo'" />
    <save-icon :class="iconClass" v-if="icon === 'save'" />
    <plus-icon :class="iconClass" v-if="icon === 'plus'" />
    <minus-icon :class="iconClass" v-if="icon === 'minus'" />
    <message-square-icon :class="iconClass" v-if="icon === 'comment'" />
    <download-icon :class="iconClass" v-if="icon === 'download'" />
    <upload-icon :class="iconClass" v-if="icon === 'upload'" />
    <film-icon :class="iconClass" v-if="icon === 'film'" />
    <play-icon :class="iconClass" v-if="icon === 'play'" />
    <pause-icon :class="iconClass" v-if="icon === 'pause'" />
    <edit-icon :class="iconClass" v-if="icon === 'edit'" />
    <image-icon :class="iconClass" v-if="icon === 'image'" />
    <maximize-icon :class="iconClass" v-if="icon === 'maximize'" />
    <trash-icon :class="iconClass" v-if="icon === 'delete'" />
    <rotate-ccw-icon :class="iconClass" v-if="icon === 'restore'" />
    <skip-back-icon :class="iconClass" v-if="icon === 'back'" />
    <skip-forward-icon :class="iconClass" v-if="icon === 'forward'" />
    <chevron-down-icon :class="iconClass" v-if="icon === 'down'" />
    <chevron-left-icon :class="iconClass" v-if="icon === 'left'" />
    <chevron-right-icon :class="iconClass" v-if="icon === 'right'" />
    <copy-icon :class="iconClass" v-if="icon === 'compare'" />
    <x-icon :class="iconClass" v-if="icon === 'remove'" />
    <edit2-icon :class="iconClass" v-if="icon === 'pencil'" />
    <layers-icon :class="iconClass" v-if="icon === 'layers'" />
    <type-icon :class="iconClass" v-if="icon === 'type'" />
    <list-icon :class="iconClass" v-if="icon === 'list'" />
    <filter-icon :class="iconClass" v-if="icon === 'funnel'" />
    <refresh-cw-icon :class="iconClass" v-if="icon === 'refresh'" />
    <repeat-icon :class="iconClass" v-if="icon === 'repeat'" />
    <volume-x-icon :class="iconClass" v-if="icon === 'soundoff'" />
    <volume-2-icon :class="iconClass" v-if="icon === 'soundon'" />
    <triangle-icon :class="iconClass" v-if="icon === 'triangle'" />
    <music-icon :class="iconClass" v-if="icon === 'music'" />
    <pen-tool-icon :class="iconClass" v-if="icon === 'pen'" />
    <square-icon :class="iconClass" v-if="icon === 'eraser'" />
    <key-icon :class="iconClass" v-if="icon == 'key'" />
    <zoom-in-icon :class="iconClass" v-if="icon == 'loupe'" />
    <globe-icon :class="iconClass" v-if="icon == 'globe'" />
    <span :class="iconClass" v-if="icon === 'laser'"> ⦿ </span>
    <span
      :class="{
        text: true,
        'is-hidden-touch': isResponsive
      }"
      v-if="isText"
    >
      {{ text }}
    </span>
  </button>
</template>

<script>
import { reactive, computed } from 'vue'

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CornerLeftDownIcon,
  CornerRightDownIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  Edit2Icon,
  GlobeIcon,
  GridIcon,
  FilmIcon,
  FilterIcon,
  ImageIcon,
  KeyIcon,
  LayersIcon,
  ListIcon,
  MaximizeIcon,
  MessageSquareIcon,
  MinusIcon,
  MusicIcon,
  PaperclipIcon,
  PauseIcon,
  PenToolIcon,
  PlayIcon,
  PlusIcon,
  RefreshCwIcon,
  RepeatIcon,
  RotateCcwIcon,
  SaveIcon,
  SendIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SquareIcon,
  TrashIcon,
  TypeIcon,
  TriangleIcon,
  UploadIcon,
  VolumeXIcon,
  Volume2Icon,
  XIcon,
  ZoomInIcon
} from 'lucide-vue-next'

export default {
  name: 'button-simple',
  components: {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CornerLeftDownIcon,
    CornerRightDownIcon,
    CopyIcon,
    DownloadIcon,
    EditIcon,
    Edit2Icon,
    FilmIcon,
    FilterIcon,
    GlobeIcon,
    GridIcon,
    ImageIcon,
    KeyIcon,
    LayersIcon,
    ListIcon,
    ZoomInIcon,
    MaximizeIcon,
    MessageSquareIcon,
    MinusIcon,
    MusicIcon,
    PaperclipIcon,
    PauseIcon,
    PenToolIcon,
    PlayIcon,
    PlusIcon,
    RefreshCwIcon,
    RepeatIcon,
    RotateCcwIcon,
    SaveIcon,
    SendIcon,
    SkipBackIcon,
    SkipForwardIcon,
    SquareIcon,
    TrashIcon,
    TypeIcon,
    UploadIcon,
    TriangleIcon,
    VolumeXIcon,
    Volume2Icon,
    XIcon
  },

  props: {
    active: {
      default: false,
      type: Boolean
    },
    icon: {
      default: '',
      type: String
    },
    isOn: {
      default: false,
      type: Boolean
    },
    isLoading: {
      default: false,
      type: Boolean
    },
    isPrimary: {
      default: false,
      type: Boolean
    },
    isResponsive: {
      default: false,
      type: Boolean
    },
    isSmall: {
      default: false,
      type: Boolean
    },
    text: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)

    return {
      isText() {
        return this.text && this.text.length > 0
      },

      iconClass() {
        return {
          icon: true,
          'is-small': true,
          'only-icon': !this.isText
        }
      }
    }
  },

  computed: {
  }
}
</script>

<style lang="scss" scoped>
.button {
  align-items: center;
  background: var(--background-alt-2);
  border: 1px solid var(--border);
  border-radius: 2em;
  color: var(--text);
  display: flex;
  font-size: 1em;
  justify-content: center;
  height: 2.285em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  position: relative;
  user-select: none;

  &.is-loading {
    color: transparent !important;
    pointer-events: none;
  }

  &.is-loading::after {
    animation: spin 1s linear infinite;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: 1em;
    left: calc(50% - (1em * .6));
    top: calc(50% - (1em * .6));
    position: absolute !important;
    width: 1em;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    width: 16px;
    margin-right: 10px;
  }

  &.icon {
    width: 20px;
    margin-right: 10px;
  }

  &.icon.is-small.only-icon {
    margin-right: 0;
  }

  &.active {
    box-shadow: inset 0 0 2px 2px var(--box-shadow);
  }

  &.small {
    font-size: 0.8em;
    padding: 0.4em;
  }

  &.is-on {
    box-shadow: inset 0 0 10px var(--box-shadow-button);
  }

  &:focus {
    box-shadow: none;
  }

  &.is-primary {
    color: white;
    background: #00b242;
  }

  &.is-primary:hover {
    background: #67be4b;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>
