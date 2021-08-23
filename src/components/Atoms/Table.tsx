import React from "react"
import * as Chakra from "@chakra-ui/react"

export const Table = Chakra.Table;

export const Thead = Chakra.Thead;

export const Th: React.FC<Chakra.TableColumnHeaderProps> = (props) => (
  <Chakra.Th fontSize="16px" fontWeight="bold" textTransform="none" {...props}></Chakra.Th>
);

export const Tbody = Chakra.Tbody;

export const Tr = Chakra.Tr;

export const Td: React.FC<Chakra.TableCellProps> = (props) => (
  <Chakra.Td {...props}></Chakra.Td>
);
