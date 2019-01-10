import * as React from 'react'

import {
    Theme
} from '@nivo/core'

declare module '@nivo/axes' {
    export interface AxisProps {
        tickValues?: number | number[] | string[] | Date[]
        tickSize?: number
        tickPadding?: number
        tickRotation?: number
        format?: any // PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        renderTick?: (data: any) => React.ReactNode
        legend?: React.ReactNode
        legendPosition?: 'start' | 'middle' | 'end'
        legendOffset?: number
    }

    export interface AxisTickProps {
        value: number | string | Date
        format: (value: number | string | Date) => number | string | Date
        x: number
        y: number
        lineX: number
        lineY: number
        textX: number
        textY: number
        textBaseline: string
        textAnchor: number
        opacity?: number
        rotate?: number
        onClick?: (event: React.MouseEvent<HTMLCanvasElement>, value: number | string | Date) => void
        theme?: Theme
    }
}
