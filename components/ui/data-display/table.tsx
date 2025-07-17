// AlignUI Table v0.0.0

import * as React from 'react'

import * as Divider from '@/components/ui/data-display/divider'
import { cn } from '@/lib/utils/cn'

function Table({
  ref: forwardedRef,
  className,
  ...rest
}: React.TableHTMLAttributes<HTMLTableElement> & {
  ref?: React.RefObject<HTMLTableElement | null>
}) {
  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <table ref={forwardedRef} className="w-full" {...rest} />
    </div>
  )
}
Table.displayName = 'Table'

function TableHeader({
  ref: forwardedRef,
  ...rest
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  ref?: React.RefObject<HTMLTableSectionElement | null>
}) {
  return <thead ref={forwardedRef} {...rest} />
}
TableHeader.displayName = 'TableHeader'

function TableHead({
  ref: forwardedRef,
  className,
  ...rest
}: React.ThHTMLAttributes<HTMLTableCellElement> & {
  ref?: React.RefObject<HTMLTableCellElement | null>
}) {
  return (
    <th
      ref={forwardedRef}
      className={cn(
        'bg-bg-weak-50 px-3 py-2 text-left text-paragraph-sm text-text-sub-600 first:rounded-l-lg last:rounded-r-lg',
        className,
      )}
      {...rest}
    />
  )
}
TableHead.displayName = 'TableHead'

function TableBody({
  ref: forwardedRef,
  spacing = 8,
  ...rest
}: React.HTMLAttributes<HTMLTableSectionElement> & {
  spacing?: number
} & { ref?: React.RefObject<HTMLTableSectionElement | null> }) {
  return (
    <>
      {/* to have space between thead and tbody */}
      <tbody
        aria-hidden="true"
        className="table-row"
        style={{
          height: spacing,
        }}
      />

      <tbody ref={forwardedRef} {...rest} />
    </>
  )
}
TableBody.displayName = 'TableBody'

function TableRow({
  ref: forwardedRef,
  className,
  ...rest
}: React.HTMLAttributes<HTMLTableRowElement> & {
  ref?: React.RefObject<HTMLTableRowElement | null>
}) {
  return (
    <tr ref={forwardedRef} className={cn('group/row', className)} {...rest} />
  )
}
TableRow.displayName = 'TableRow'

function TableRowDivider({
  className,
  dividerClassName,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Divider.Root> & {
  dividerClassName?: string
}) {
  return (
    <tr aria-hidden="true" className={className}>
      <td colSpan={999} className="py-1">
        <Divider.Root
          variant="line-spacing"
          className={dividerClassName}
          {...rest}
        />
      </td>
    </tr>
  )
}
TableRowDivider.displayName = 'TableRowDivider'

function TableCell({
  ref: forwardedRef,
  className,
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement> & {
  ref?: React.RefObject<HTMLTableCellElement | null>
}) {
  return (
    <td
      ref={forwardedRef}
      className={cn(
        'h-16 px-3 transition duration-200 ease-out first:rounded-l-xl last:rounded-r-xl group-hover/row:bg-bg-weak-50',
        className,
      )}
      {...rest}
    />
  )
}
TableCell.displayName = 'TableCell'

function TableCaption({
  ref: forwardedRef,
  className,
  ...rest
}: React.HTMLAttributes<HTMLTableCaptionElement> & {
  ref?: React.RefObject<HTMLTableCaptionElement | null>
}) {
  return (
    <caption
      ref={forwardedRef}
      className={cn('mt-4 text-paragraph-sm text-text-sub-600', className)}
      {...rest}
    />
  )
}
TableCaption.displayName = 'TableCaption'

export {
  TableBody as Body,
  TableCaption as Caption,
  TableCell as Cell,
  TableHead as Head,
  TableHeader as Header,
  Table as Root,
  TableRow as Row,
  TableRowDivider as RowDivider,
}
