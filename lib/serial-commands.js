var MODEM_STATES = Object.create(null);

var startOfIMCommand = 'startOfIMCommand';
var negativeAcknowledge = 'negativeAcknowledge';

MODEM_STATES[0x02] = startOfIMCommand;
MODEM_STATES[0x15] = negativeAcknowledge;

MODEM_STATES[startOfIMCommand] = 0x02;
MODEM_STATES[negativeAcknowledge] = 0x15;

var SERIAL_COMMANDS = Object.create(null);

var insteonStandardMessageReceived = 'insteonStandardMessageReceived';
var insteonExtendedMessageReceived = 'insteonExtendedMessageReceived';
var x10Received = 'x10Received';
var allLinkingComplete = 'allLinkingComplete';
var buttonEventReport = 'buttonEventReport';
var userResetDetected = 'userResetDetected';
var allLinkCleanupFailureReport = 'allLinkCleanupFailureReport';
var allLinkRecordResponse = 'allLinkRecordResponse';
var allLinkCleanupStatusReport = 'allLinkCleanupStatusReport';
var getIMInfo = 'getIMInfo';
var sendAllLinkCommand = 'sendAllLinkCommand';
var sendInsteonStandardMessage = 'sendInsteonStandardMessage';
var sendInsteonExtendedMessage = 'sendInsteonExtendedMessage';
var sendX10Message = 'sendX10Message';
var startAllLinking = 'startAllLinking';
var cancelAllLinking = 'cancelAllLinking';
var setHostDeviceCategory = 'setHostDeviceCategory';
var resetIM = 'resetIM';
var setInsteonACKMessageByte = 'setInsteonACKMessageByte';
var getFirstAllLinkRecord = 'getFirstAllLinkRecord';
var getNextAllLinkRecord = 'getNextAllLinkRecord';
var setIMConfiguration = 'setIMConfiguration';
var getAllLinkRecordForSender = 'getAllLinkRecordForSender';
var turnLEDOn = 'turnLEDOn';
var turnLEDOff = 'turnLEDOff';
var manageAllLinkRecord = 'manageAllLinkRecord';
var setInsteonNAKMessageByte = 'setInsteonNAKMessageByte';
var setInsteonACKMessageTwoBytes = 'setInsteonACKMessageTwoBytes';
var setRFSleep = 'setRFSleep';
var getIMConfiguration = 'getIMConfiguration';
