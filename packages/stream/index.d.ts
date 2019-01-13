import * as React from 'react'
import { Dimensions, Box, Theme, MotionProps, ColorProps, CartesianMarkerProps } from '@nivo/core'
import { LegendProps } from '@nivo/legends'
import { Scale } from '@nivo/scales'
import { AxisProps } from '@nivo/axes'

declare module '@nivo/stream' {

    export interface StreamDatum {
        x?: string | number | Date | null
        y?: string | number | Date | null
        [key: string]: any
    }

    export interface StreamSerieData {
        id: string | number
        data: StreamDatum[]
        [key: string]: any
    }

    export interface StreamComputedSerieData {
        id: string | number
        data: Array<{
            position: {
                x: number
                y: number
            }
            data: any
        }>
        color?: string
        [key: string]: any
    }

    export interface StreamProps extends ColorProps<StreamComputedSerieData> {
        data: StreamSerieData[]
        keys?: string[]

        xScale?: Scale
        yScale?: Scale

        order?:
            | 'ascending'
            | 'descending'
            | 'insideOut'
            | 'none'
            | 'reverse'

        offsetType?:
            | 'expand'
            | 'diverging'
            | 'none'
            | 'silhouette'
            | 'wiggle'

        curve?:
            | 'basis'
            | 'cardinal'
            | 'catmullRom'
            | 'linear'
            | 'monotoneX'
            | 'monotoneY'
            | 'natural'
            | 'step'
            | 'stepAfter'
            | 'stepBefore'

        theme?: Theme

        axisTop?: AxisProps | null
        axisRight?: AxisProps | null
        axisBottom?: AxisProps | null
        axisLeft?: AxisProps | null

        enableGridX?: boolean
        enableGridY?: boolean

        borderWidth: number
        borderColor: any

        enableDots?: boolean
        renderDot?: (dot: any) => React.ReactNode
        dotPosition?: 'start' | 'center' | 'end'
        dotSize?: (datum: any) => number | number
        dotColor?: any
        dotBorderWidth?: number
        dotBorderColor?: any

        isInteractive?: boolean
        tooltipLabel?: any // (StreamSliceItem.slice.stack) => string
        tooltipFormat?: any // TooltipFormatter
        enableStackTooltip?: boolean

        legends?: LegendProps[]
    }

    export interface StreamSvgProps extends StreamProps, MotionProps {}

    export class Stream extends React.Component<StreamSvgProps & Dimensions> {}
    export class ResponsiveLine extends React.Component<StreamSvgProps> {}
}