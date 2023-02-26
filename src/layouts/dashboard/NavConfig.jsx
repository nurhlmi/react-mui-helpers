import {
  TextFieldsRounded,
  MenuRounded,
  CheckBoxRounded,
  RadioButtonCheckedRounded,
  DateRangeRounded,
  SearchRounded,
  ListRounded,
  FileCopyRounded,
  InsertDriveFileRounded,
  AccessTimeRounded,
  ImageRounded,
  CropRounded,
  TableChartRounded,
  WebAssetRounded,
  RefreshRounded,
  AnnouncementRounded,
  MessageRounded,
  PinRounded,
  SaveAltRounded,
  PictureAsPdfRounded,
  DataObjectRounded,
  QrCode2Rounded,
  WysiwygRounded,
  DnsRounded,
  WarningRounded,
} from '@mui/icons-material';

const navConfig = [
  {
    title: 'Inputs',
    new: true,
    children: [
      // {
      //   title: 'Testing',
      //   path: '/testing',
      //   icon: <TextFieldsRounded />,
      // },
      {
        title: 'Text Field',
        path: '/text-field',
        icon: <TextFieldsRounded />,
      },
      {
        title: 'Select',
        path: '/select',
        icon: <MenuRounded />,
      },
      {
        title: 'Radio Button',
        path: '/radio-button',
        icon: <RadioButtonCheckedRounded />,
      },
      {
        title: 'Checkbox',
        path: '/checkbox',
        icon: <CheckBoxRounded />,
      },
      {
        title: 'Autocomplete',
        path: '/autocomplete',
        icon: <SearchRounded />,
      },
      {
        title: 'Date Picker',
        path: '/date-picker',
        icon: <DateRangeRounded />,
      },
      {
        title: 'WYSIWYG',
        path: '/wysiwyg',
        icon: <WysiwygRounded />,
      },
    ],
  },
  {
    title: 'Uploads',
    children: [
      {
        title: 'File',
        path: '/file',
        icon: <InsertDriveFileRounded />,
      },
      {
        title: 'Multiple Files',
        path: '/multiple-files',
        icon: <FileCopyRounded />,
      },
      {
        title: 'Image',
        path: '/image',
        icon: <ImageRounded />,
      },
      {
        title: 'Cropped Image',
        path: '/cropped-image',
        icon: <CropRounded />,
      },
    ],
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Table',
        path: '/table',
        icon: <TableChartRounded />,
      },
      {
        title: 'App Bar (Navbar)',
        path: '/app-bar',
        icon: <WebAssetRounded />,
      },
      {
        title: 'Menu (Dropdown)',
        path: '/menu',
        icon: <ListRounded />,
      },
      {
        title: 'Dialog (Modal)',
        path: '/dialog',
        icon: <MessageRounded />,
      },
      {
        title: 'Snackbar',
        path: '/snackbar',
        icon: <AnnouncementRounded />,
      },
    ],
  },
  {
    title: 'Templates',
    children: [
      {
        title: 'Loading',
        path: '/loading',
        icon: <RefreshRounded />,
      },
      {
        title: 'Card',
        path: '/card',
        icon: <WysiwygRounded />,
      },
      {
        title: 'Chip',
        path: '/chip',
        icon: <DnsRounded />,
      },
      {
        title: 'Not Found',
        path: '/not-found',
        icon: <WarningRounded />,
      },
    ],
  },
  {
    title: 'Utilities',
    children: [
      {
        title: 'Date Format',
        path: '/date-format',
        icon: <AccessTimeRounded />,
      },
      {
        title: 'Number Format',
        path: '/number-format',
        icon: <PinRounded />,
      },
      {
        title: 'Get Filename',
        path: '/get-filename',
        icon: <InsertDriveFileRounded />,
      },
      {
        title: 'Export CSV',
        path: '/export-csv',
        icon: <SaveAltRounded />,
      },
      {
        title: 'Export PDF',
        path: '/export-pdf',
        icon: <SaveAltRounded />,
      },
      {
        title: 'View PDF',
        path: '/view-pdf',
        icon: <PictureAsPdfRounded />,
      },
      {
        title: 'QR Code',
        path: '/qr-code',
        icon: <QrCode2Rounded />,
      },
    ],
  },
  {
    title: 'API',
    children: [
      {
        title: 'getData',
        path: '/get-data',
        icon: <DataObjectRounded />,
      },
      {
        title: 'handleSubmit',
        path: '/handle-submit',
        icon: <DataObjectRounded />,
      },
      {
        title: 'handleDelete',
        path: '/handle-delete',
        icon: <DataObjectRounded />,
      },
      {
        title: 'Promise',
        path: '/promise',
        icon: <DataObjectRounded />,
      },
    ],
  },
];

export default navConfig;
