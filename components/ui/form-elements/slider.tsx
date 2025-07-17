'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils/cn'

const SLIDER_ROOT_NAME = 'SliderRoot'
const SLIDER_THUMB_NAME = 'SliderThumb'

function SliderRoot({
  ref: forwardedRef,
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  ref?: React.RefObject<React.ComponentRef<typeof SliderPrimitive.Root> | null>
}) {
  return (
    <SliderPrimitive.Root
      ref={forwardedRef}
      className={cn(
        'relative flex h-4 w-full touch-none select-none items-center',
        className,
      )}
      {...rest}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full overflow-hidden rounded-full bg-bg-soft-200">
        <SliderPrimitive.Range className="absolute h-full bg-primary-base" />
      </SliderPrimitive.Track>
      {children}
    </SliderPrimitive.Root>
  )
}
SliderRoot.displayName = SLIDER_ROOT_NAME

function SliderThumb({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof SliderPrimitive.Thumb
  > | null>
}) {
  return (
    <SliderPrimitive.Thumb
      ref={forwardedRef}
      className={cn(
        [
          // base
          'box-content block size-1.5 shrink-0 cursor-pointer rounded-full border-[5px] border-static-white bg-primary-base shadow-toggle-switch outline-none',
          // focus
          'focus:outline-none',
        ],
        className,
      )}
      {...rest}
    />
  )
}
SliderThumb.displayName = SLIDER_THUMB_NAME

export { SliderRoot as Root, SliderThumb as Thumb }
